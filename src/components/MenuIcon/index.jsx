import "./styles.css";

export function MenuIcon({ onClick }) {
    return (
        <label className="burger" htmFor="burger">
            <input type="checkbox" id="burger" onClick={onClick}/>
            <span></span>
            <span></span>
            <span></span>
        </label>
    );
}