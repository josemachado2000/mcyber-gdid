import { useState, useEffect, useRef } from "react";
import axios from "axios";

type UserData = {
  [email: string]: [];
};

const Protected = ({ token }: any) => {
  const isRun = useRef(false);

  const [data, setData] = useState<UserData | null>(null);

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(process.env.REACT_APP_SERVER_DOCUMENTS!, config)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return data ? (
    <>
      {Object.keys(data).map((email) => {
        const info = data[email];
        return <h3>{info}</h3>;
      })}
    </>
  ) : (
    <div>Protected</div>
  );
};

export default Protected;
