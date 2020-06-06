import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react'

// Realiza a troca de rotas sem a necessidade de recarregar a 
// pagina por completo.
import { Link, useHistory } from 'react-router-dom'

import { FiArrowLeft} from 'react-icons/fi'

import { Map, TileLayer, Marker } from 'react-leaflet'
import { LeafletMouseEvent } from 'leaflet'

import axios from 'axios'

// Axios - Permite criar um unico endereco para varias requisicoes.
import api from '../../services/api'

import Dropzone from '../../components/Dropzone'

import './styles.css'
import logo from '../../assets/logo.svg'

// Toda vez que se cria um estado para um "array" ou um "objeto"
// e necessario informar manualmente o tipo da variavel armazenada.

//parou 1:45:43

interface Item {
    id: number,
    title:string,
    image_url: string
}

interface IBGEUFResponse {
    sigla: string
}

interface IBGECityResponse {
    nome: string
}

const CreatePoint = () => {

    // Criacao de um estado para armazenar um componente. E necessario quando
    // se deseja obter uma informacao vindaspara dentro do componete.
    const [items, setItems] = useState<Item[]>([])
    const [ufs, setUfs] = useState<string[]>([])
    const [cities, setCities] = useState<string[]>([])

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: ''
    })

    // useState('0') - porque o primeiro option da UF comeca com 0.
    const [selectedUF, setSelectedUF] = useState('0')

    // Quarda a cidade selecionada pelo usuario.
    const [selectedCity, setSelectedCity] = useState('0')

    // Quarda os itens selecionados pelo usuario.
    // Vai armazenar um array de numeros
    const [selectedItems, setSelectedItems] = useState<number[]>([]) 


    // Retorna a localizacao atual do usuario.
    //const [inicialPosition, setInicialPosition] = useState<[number, number]>([0, 0])

    // Quarda a posicao do usuario ao click do usuario
    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0])

    const [selectedFile, setSelectedFile] = useState<File>()

    const history = useHistory()

    // useEffect - Nao vai permitir que toda vez de uma requisicao dentro
    // da funcao ocorra, ele nao recarregue todo o codigo novamente.
    // A funcao dentro dela sera executado uma unica vez assim que o componente
    // for executado.
    useEffect(() => {
        // then - espera concluir a acao para continuar.
        // e igual a async.
        api.get('items').then(response => {
            setItems(response.data)
        })
    }, [])

    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
            const ufInitials = response.data.map(uf => uf.sigla)

            setUfs(ufInitials)
        })
    }, [])

    useEffect(() => {
        // Carregar as cidades sempre que a UF mudar.

        if(selectedUF === '0'){ return }

        axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/municipios`)
            .then(response => {
                const cityNames = response.data.map(city => city.nome)

            setCities(cityNames)
        })
    }, [selectedUF])

    /*useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude} = position.coords

            setInicialPosition([latitude, longitude])
        })
    }, [])*/

    // ChangeEvent- Mudanca de um valor.
    function handleSelectUF(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value

        setSelectedUF(uf)
    }

    // Armazena a cidade em um estado.
    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value

        setSelectedCity(city)
    }

    function handleMapClick(event:LeafletMouseEvent){
        setSelectedPosition([
            event.latlng.lat,
            event.latlng.lng
        ])
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target

        // ...formData - Splash population.
        // Quando o "name" for um dos campos vindos delo value 
        // ele o substitui. 
        setFormData({...formData, [name]: value})
    }

    function handleSelectItem(id: number) {
        // Verificar se o usuario ja clicou no item antes.
        // findIndex - reorna um numero acima de 0 ou retorna 0 se o Item ja estiver no array.
        // se nao retornar'a -1.
        const alreadySelected = selectedItems.findIndex(item => item === id)

        if (alreadySelected >= 0) {
            // Filtra a lista de itens selecionados, pegando apenas os itens 
            // com Id diferente do que se deseja remover
            const filteredItems = selectedItems.filter(item => item !== id)

            setSelectedItems(filteredItems)

        } else {
            // ...selectedItems - tudo o que ja tem dentro do selectedItems
            // e colocar o id novo que seta sendo selecionado.
            setSelectedItems([...selectedItems, id])
        }


    }

    async function handleSubmit(event: FormEvent){
        event.preventDefault()

        const { name, email, whatsapp} = formData
        const uf = selectedUF
        const city = selectedCity
        const [latitude, longitude] = selectedPosition
        const items = selectedItems

        const data = new FormData()

        data.append('name',name)
        data.append('email',email)
        data.append('whatsapp',whatsapp)
        data.append('uf',uf)
        data.append('city',city)
        data.append('latitude',String(latitude))
        data.append('longitude',String(longitude))
        data.append('items',items.join(','))

        // Nao permite o formulatio ser enviado sem imagem
        if (selectedFile) {
            data.append('image', selectedFile)
        }
        
        /*const data = {
            name,
            email,
            whatsapp,
            uf,
            city,
            latitude,
            longitude,
            items
        }*/

        await api.post('points', data)

        alert("ponto de coleta criado")

        // Vai para um endereco da aplicacao.
        history.push('/')
    }

    return (
        <div id="page-create-point">
            <header>
                <img src={ logo } alt="Ecoleta"/>

                <Link to="/">
                    <FiArrowLeft/>
                    Voltar para home
                </Link>
            </header>

            <form onSubmit={handleSubmit}>
                <h1>Cadastro do <br/> ponto de coleta</h1>

                <Dropzone onFileUploaded={setSelectedFile} />

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <p>Upload da imagem</p>

                    <div className="field">
                        <label htmlFor="name">Nome da entidade</label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E- mail</label>
                            <input 
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="field">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input 
                                type="text"
                                name="whatsapp"
                                id="whatsapp"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço no mapa</span>
                    </legend>

                    <Map center={[-22.7479722, -45.6117547] /*inicialPosition*/} zoom={15} onClick={handleMapClick}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker position={selectedPosition} />
                    </Map>
                    
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                           
                            {/*Toda vez que a UF mudar reflita as alteracoses no select.*/}
                            <select 
                                name="uf" 
                                id="uf" 
                                value={selectedUF} 
                                onChange={handleSelectUF}
                            >
                                 <option value="0" >Selecione uma UF</option>

                                {ufs.map(uf => (
                                    <option key={uf} value={uf}>{uf}</option>
                                ))}
            
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select name="city" id="city" value={selectedCity} onChange={handleSelectCity}>
                                <option value="0">Selecione uma cidade</option>

                                {cities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Ítens de coleta</h2>
                        <span>Selecione um ou mais ítens abaixo</span>
                    </legend>

                    <ul className="items-grid">

                        {
                            // Conchetes - indica que sera inserido codigo javascript dentro do HTML.
                            // Map - realiza uma varredura em um array, e para cada elemento crie um
                            // determinado codigo.
                            items.map(item => (
                                // Mecessario ter o key, para auxiliar o react a identificar o elemento
                                // quando for necessario atualiza-lo, ele precisa ser um valor unico.
                                <li 
                                    // selectedItems.includes(item.id) - retorna verdadeiro ou falso..
                                    // verificando se ja existe no array ou nao.
                                    // Se sim, ira colocar uma classe chamada selected
                                    // se nao, sera uma string vazia. 
                                    className={selectedItems.includes(item.id) ? 'selected' : ''} 
                                    key= {item.id} 
                                    onClick={() => handleSelectItem(item.id)}
                                >
                                    <img src={item.image_url} alt={item.title}/>
                                    <span>{item.title}</span>
                                </li>
                            ))
                        }

                    </ul>
                </fieldset>

                <button type="submit">
                    Cadastrar ponto de coleta
                </button>
            </form>
        </div>
    )
}

export default CreatePoint