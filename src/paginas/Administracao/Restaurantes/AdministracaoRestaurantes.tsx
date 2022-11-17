import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react"
import IRestaurante from "../../../interfaces/IRestaurante"

const AdministracaoRestaurantes = () => {
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

    useEffect(() => {
        axios.get<IRestaurante[]>("http://localhost:8000/api/v2/restaurantes/")
            .then(resposta => setRestaurantes(resposta.data));
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurantes.map((restaurante) => (
                        <TableRow
                            key={restaurante.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {restaurante.nome}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AdministracaoRestaurantes