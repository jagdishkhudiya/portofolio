import "./PortofolioList.scss";

export default function PortofolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "portofolioList active" : "portofolioList"}
      onClick={() => setSelected(id)}
    >
      {/* TAMBAHIN TEKS PENJELASAN TENTANG YANG DI TAMPILIN (TAMBAHIN DI DATA.JS dan File JSX) */}
      {title}
    </li>
  );
}
