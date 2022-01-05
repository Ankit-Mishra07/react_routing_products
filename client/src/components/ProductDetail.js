import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

const Container = styled.div`
box-shadow:-0.5px -0.5px 2px 0.6px rgba(0, 0, 0, 0.2),2px 2px 2px 0.2px rgba(0, 0, 0, 0.2) ;
width: 80%;
padding: 20px;
border: 1px solid lightgray;
display: grid;
grid-template-columns: 50% 50%;
text-align: left;
margin: auto;

margin-top: 120px;
border-radius: 10px;
`

const Image = styled.img`
width: 100%;
height: 500px;

`

const TextBox = styled.div`
text-align: left;
margin-left: 20px;
`
const P = styled.p`
color: #1A374D;
font-weight: 600;
font-size: 16px;
`
const ProductDetail = () => {

    let {id} = useParams();
    const [data, setData] = useState({})
    const getData = async() => {
        let res = await fetch(`http://localhost:5000/products/${id}`)
        let dat = await res.json()
        setData(dat)
        console.log(dat)
    }
    useEffect(() => {
        getData()
    },[])

    return (
        <Container>
            <Image src={data.image} />
            <TextBox>
                <P>{data.title}</P>
                <P>Price : <span>{data.price}</span>₹</P>
                <P>Category : <span>{data.category}</span></P>
                <P>Description : <span>{data.description}</span></P>
            </TextBox>
        </Container>
    )
}

export default ProductDetail
