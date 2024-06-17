import { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../../../context/OrderContext.jsx"
import TextInput from "../../../../../../reusable-ui/TextInput"
import Button from "../../../../../../reusable-ui/Button"
import ImagePreview from "./ImagePreview"
import SubmitMessage from "./SubmitMessage"
import { getInputTextsConfig } from "./inputTextConfig"


export default function EditForm() {
    const { handleEdit, newProduct, setNewProduct } = useContext(OrderContext)
    const [liveProduct, setLiveProduct] = useState(newProduct)
    const [isSubmitted, setIsSubmitted] = useState(false)


    useEffect(() => {
        setLiveProduct(newProduct)
    }, [newProduct]  )
    const handleChange = (event) => {
        const { name, value } = event.target
        setLiveProduct(prevProduct => ({ ...prevProduct, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleEdit(liveProduct)
        displaySuccessMessage()
    }




    const displaySuccessMessage = () => {
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
        }, 2000)
    }

    const inputTexts = getInputTextsConfig(liveProduct)
    return (
        <EditFormStyled onSubmit={handleSubmit}>
            <ImagePreview imageSource={liveProduct.imageSource} title={liveProduct.title} />
            <div className="input-fields">
                {inputTexts.map((input) => (
                    <TextInput {...input} key={input.id} onChange={handleChange} version="minimalist" />
                ))}
            </div>
            <div className="submit">
                <Button
                    className="submit-button"
                    label={"Modifier le produit"}
                    version="success"
                    type="submit"
                />
                {isSubmitted && <SubmitMessage />}
            </div>
        </EditFormStyled>
    )
}

const EditFormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    height: 100%;
    width: 70%;
    grid-column-gap: 20px;
    grid-row-gap: 8px;

    .input-fields {
        grid-area: 1 / 2 / -2 / 3;
        display: grid;
        grid-row-gap: 8px;
    }

    .submit {
        grid-area: 4 / -2 / -1 / -1;
        display: flex;
        align-items: center;
        position: relative;
        top: 3px;

        .submit-button {
            height: 100%;
        }
    }
`
