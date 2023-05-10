import './Table.css';
import { useState } from "react";

const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
]

function Table() {
    const [students, SetStudents] = useState(data);
    const [showForm, SetShowForm] = useState(false);
    const [name, SetName] = useState("");
    const [age, SetAge] = useState("");
    const [gender, SetGender] = useState("");

    function hiddenShow(){
        if(!showForm){
            SetShowForm(true)
        }else{
            SetShowForm(false)
        }
    }

    function remove(rm: String) {
        SetStudents(students.filter(obj => obj.name !== rm));
    }
    function addStudent(){
        students.push({name:name,age:parseInt(age),gender:gender})
        SetStudents(students)
        SetShowForm(false)
    }

    return (
        <div className='main'>
            <h1>Gestione Studenti</h1>
            <div className="Table">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th><button onClick={() => hiddenShow()}>Inserisci Studente</button></th>
                    </tr>
                    {students.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>{val.gender}</td>
                                <td><button onClick={() => remove(val.name)}>Elimina</button></td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            {showForm && 

                <form>
                    nome:<br/>
                    <input type="text" onChange={(name) => SetName(name.target.value)}/><br/>
                    eta:<br/>
                    <input type="text" onChange={(age) => SetAge(age.target.value)}/><br/>
                    genere:<br/>
                    <input type="text" onChange={(gender) => SetGender(gender.target.value)}/><br/><br/>
                    <button onClick={() => addStudent()}>Salva</button>
                </form>
            

            }
        </div>
    );
}
export default Table;