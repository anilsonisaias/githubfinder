import Search from "../components/Search";
import User from "../components/User";
import { UserProps } from "../types/user";
import { useState } from "react";
import Error from "../components/Error";

// Nomeie sua função de componente
export default function UserSearch() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null)
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();

      if(res.status === 404){
        setError(true);
        return;
      }

      else if (res.ok) {
        const { avatar_url, login, location, followers, following } = data;

        const userData: UserProps = {
          avatar_url,
          login,
          location,
          followers,
          following,
        };

        setUser(userData);
      } else {
        console.error("Erro ao carregar usuário:", data.message);
      }
    } catch (error) {
      console.error("Erro ao carregar usuário:", error);
    }
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User  {...user}/>}
      {error && <Error/>}
    </div>
  );
}
