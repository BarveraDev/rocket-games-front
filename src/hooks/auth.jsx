import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../service/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      localStorage.setItem("@rocketgames:user", JSON.stringify(user));
      localStorage.setItem("@rocketgames:token", token);

      setData({ user, token });
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possivel entrar.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketgames:user");
    localStorage.removeItem("@rocketgames:token");

    setData({});
  }

  async function updatedProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);

      localStorage.setItem("@rocketgames:user", JSON.stringify(user));
      setData({ user, token: data.token });
      alert("Perfil atualizado!");
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possivel atualizar o perfil.");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketgames:token");
    const user = localStorage.getItem("@rocketgames:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updatedProfile, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
