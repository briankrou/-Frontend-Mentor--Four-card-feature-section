import './card.css';

const Card = ({ title, description, icon, color }) => {
  // Convertimos el objeto de estilos en una cadena
  const style = `border-top: solid 4px ${color || ''}`;

  // Definimos el HTML que se renderiza
  const element = () => `
    <div style="${style}" class="card">
    <div>
      <p class="card-title">${title}</p>
      <p class="card-description">${description}</p>
    </div>
      <div class="card-icon">
        <img src="${icon}" alt="icon" />
      </div>
    </div>
  `;

  return {
    element
  };
};

export default Card;
