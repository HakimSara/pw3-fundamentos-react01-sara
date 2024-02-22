

function Livro({titulo, autor, imagem, descricao}){
    return(
        <div className="App">
            <div className='cardBook'> 
            <h3> {titulo}</h3>
            <p>{autor}</p>
            <img src={imagem} width={150} alt='Capa do livro as cavvernas de aço de Isaac Asimov'></img>
            <p>{descricao}</p>
            </div>
        </div>
    );
}

export default Livro;