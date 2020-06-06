import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'

import './styles.css'

interface Props {
    onFileUploaded: (file: File) => void
}

const Dropzone: React.FC<Props> = ({onFileUploaded}) => {
    // Para criar uma previsualizacao da imagem
    const [selectedFileUrl, setSelectedFileUrl] = useState('')

    // useCallbeck =Usado para memorizar uma funcao para que ela 
    // seja recriada somente quando o valor de variavel mudar.
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]

        const fileUrl = URL.createObjectURL(file)

        setSelectedFileUrl(fileUrl)
        onFileUploaded(file)

    }, [onFileUploaded])

    const {getRootProps, getInputProps} = useDropzone({
        // Recebe qualquer tipo de arquivo.
        onDrop,
        // restringe a receber apenas imagens
        accept: 'image/*'
    })

    // Se quiser multiplas imoagens adicione no input "multiple".
    return (
        <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} accept="image/*"/>

            {
                // Caso eixta "selectedFileUrl" mostro na tela
                selectedFileUrl ? <img src={selectedFileUrl} alt="Point thumbnail"/>
                // Entao coloque a linha abaixo
                : (
                    <p>
                        <FiUpload />
                        Imagem do estabelecimento
                    </p>     
                )
            }
        </div>
    )
}

export default Dropzone