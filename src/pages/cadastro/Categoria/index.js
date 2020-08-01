import React, { useState }from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

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

        <div>
          <label>
           Descrição:
            <input
            type="text" 
            value={values.cor}
            name="descricao"
            onChange={handleChange}
            />
          </label>
        </div>

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

          <button>
            Cadastrar
          </button>
        </form>

            <ul>
              {categoria.map((categoria, indice) => {
                return (
                  <li key={`${categoria}${indice}`}>
                    {categoria.nome}
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