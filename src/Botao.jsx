export function Botao({ onClick, children }) {
    return (
        <button onClick={onClick} style={{ margin: '5px', padding: '5px 10px' }}>
            {children}
        </button>
    );
}