import { useRouter } from 'next/router';
import { useState } from 'react';

export default function HomeScreen() {
  const router = useRouter();

  const [values, setValues] = useState({
    user: 'jessejonass',
    password: 'safepassword'
  });

  const handleChange = (e) => {
    const fieldValue = e.target.value;
    const fieldName = e.target.name;
    
    setValues((currentValues) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue
      }
    })
  }
  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        router.push('/auth-page-ssr');
      }}>
        <input
          placeholder="Usuário" name="user"
          value={values.user}
          onChange={handleChange}
        />
        <input
          placeholder="Senha" name="password" type="password"
          value={values.password}
          onChange={handleChange}
        />

        {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}

        <div>
          <button>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
