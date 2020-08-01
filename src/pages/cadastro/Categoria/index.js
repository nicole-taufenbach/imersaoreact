import React, { useState, useEffect }from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categoria, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

function setValue(chave, valor) {
  setValues({
    ...values,
    [chave]: valor,
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }
  useEffect(() => {
    if(window.location.href.includes('localhost')) {
      const URL = 'http://localhost:3000/categorias'; 
      fetch(URL)
       .then(async (respostaDoServer) =>{
        if(respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return; 
        }
        throw new Error('Não foi possível pegar os dados');
       })
    }    
  }, []);

  return (
    <PageDefault>
        <h1>Página de Cadastro de categoria: {values.nome}</h1>
          
          <form onSubmit={function handleSubmit(infosDoEvento) {
            infosDoEvento.preventDefault();
            setCategorias([
              ...categoria,
              values
            ]);

            setValues(valoresIniciais)
        }}>

        <FormField 
        label="Nome da Categoria"
        type="text"
        name="nome"
        value={values.nome}
        onChange={handleChange}
        />

        <FormField 
        label="Descrição"
        type="textarea"
        name="descricao"
        value={values.descricao}
        onChange={handleChange}
        />

        <FormField
        label="Cor"
        type="color"
        name="cor"
        value={values.cor}
        onChange={handleChange}
        />
        {/* <div>
          <label>
           Cor:
            <input
            type="color" 
            value={values.cor}
            name="cor"
            onChange={handleChange}
            />
          </label>
        </div> */}

          <Button>
            Cadastrar
          </Button>
        </form>

        <ul>
        {categoria.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.titulo}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

  export default CadastroCategoria;