import { useEffect, useState } from "react";
import { aboutService } from "../services/aboutService";

const SobreNosotros = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await aboutService.getAboutInfo();
        setAbout(data);
      } catch (err) {
        setError("Error al cargar la información");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Sobre Nosotros</h1>
      <p>{about?.description}</p>
    </div>
  );
};

export default SobreNosotros;