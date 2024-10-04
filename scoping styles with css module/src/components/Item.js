import styled from "./item.module.css";

export default function Item({ item }) {
  return (
    <div className={styled.container}>
      <h3 className={styled.title}>{item.title}</h3>
      <img src={item.image} alt={item.title} className={styled.image} />
      <p>
        <strong className={styled.price}>${item.price}</strong>
      </p>
      <p>{item.description}</p>
    </div>
  );
}
