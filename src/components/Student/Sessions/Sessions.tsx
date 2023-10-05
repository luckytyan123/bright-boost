import React from "react";
import { Form, Table } from "react-bootstrap";
import { SessionProps } from "types";

const Sessions: React.FC<SessionProps> = ({ checkable }) => {
    const hasUserSession = true;
    const registeredSession = ["SD01", "SD03"];
    const data = [
        {
            id: "SD01",
            title: "Brownbag",
            teacher: "John Otto",
            date: "Oct 03, 2023"
        },
        {
            id: "SD02",
            title: "Infrastracture",
            teacher: "John Blue",
            date: "Oct 03, 2023"
        },
        {
            id: "SD03",
            title: "Network Admin",
            teacher: "John Prunes",
            date: "Oct 03, 2023"
        }
    ]
    const TableHeader = () => {
        return (
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Session</th>
                    <th>Teacher</th>
                    <th>Date</th>
                    {checkable ? <th></th> : hasUserSession ? <th>Registered?</th>: null}
                </tr>
            </thead>
        )
    }
    const TableBody = () => {
        return <tbody>
            {data.map((value, index) => {
                return (
                    <tr key={index}>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.teacher}</td>
                        <td>{value.date}</td>
                        {checkable
                            ? <td className="text-center">
                                <Form.Check // prettier-ignore
                                    type="checkbox"
                                    id="session"
                                    value={value.id}
                                />
                            </td>
                            :

                            hasUserSession ?
                                <td>
                                    {registeredSession.includes(value.id) ? "Yes" : "No"}
                                </td>
                                : null
                        }

                    </tr >
                )
            })}
        </tbody >
    }
    return (
        <div className="session-table-container">
            <Table bordered>
                <TableHeader />
                <TableBody />
            </Table>
        </div>
    )
}
export default Sessions;
