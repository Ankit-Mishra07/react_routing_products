import React,{useState, useEffect} from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 32%);
grid-gap: 3%;
width: 90%;
margin: auto;
margin-top: 100px;

`

const Box = styled.div`
box-shadow:-0.5px -0.5px 2px 0.6px rgba(0, 0, 0, 0.2),2px 2px 2px 0.2px rgba(0, 0, 0, 0.2) ;
border-radius: 10px;
text-align: center;
padding: 20px;
`

const Image = styled.img`
width : 100%;
height: 250px;


`

const link = {
    backgroundColor: "#406882",
    color : "#fff",
    textDecoration : "none",
    border : "2px solid #1A374D",
    padding : "5px 10px"
}

const Products = () => {

    const [data, setData] = useState([])
    const getAllData = async() => {
        let res = await fetch("http://localhost:5000/products")
        let dat = await res.json()
        setData(dat)
    }
    useEffect(() => {
        getAllData()
    },[])
    return (
        <Container>

        {
            data.map((e) => (

                <Box>
                    <div>
                        <Image src={e.image} alt="" />
                    </div>
                    <p>{e.title.substring(0,40)}</p>
                    <p>Price : <span>{e.price}</span>₹</p>
                    <Link style={link} to={`/products/${e.id}`}>More Details</Link>
                </Box>
            ))
        }
            
        </Container>
    )
}

export default Products
