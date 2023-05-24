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
    const [showFormMod, SetShowFormMod] = useState(false);
    const [name, SetName] = useState("");
    const [age, SetAge] = useState("");
    const [gender, SetGender] = useState("");
    const [studentToEdit, setStudentToEdit] = useState('');

    function hiddenShow() {
        if (!showForm) {
            SetShowForm(true)
        } else {
            SetShowForm(false)
        }
    }
    function hiddenShowMod() {
        if (!showFormMod) {
            SetShowFormMod(true)
        } else {
            SetShowFormMod(false)
        }
    }

    function modifica() {
        for (let i = 0; i < students.length; i++) {
            if (students[i].name == studentToEdit) {
                students[i].name = name
                students[i].gender = gender
                students[i].age = parseInt(age)
                break;
            }
        }
        SetStudents(students)
        hiddenShowMod()
    }

    function handleModClick(val: any) {
        SetName(val.name)
        SetAge(val.age)
        SetGender(val.gender)
        setStudentToEdit(val.name)
        hiddenShowMod()
      }

    function remove(rm: String) {
        SetStudents(students.filter(obj => obj.name !== rm));
    }
    function addStudent() {
        students.push({ name: name, age: parseInt(age), gender: gender })
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
                        <th colSpan={2}><button onClick={() => hiddenShow()}>Inserisci Studente</button></th>
                    </tr>
                    {students.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>{val.gender}</td>
                                <td><button onClick={() => remove(val.name)}>Elimina</button></td>
                                <td><button onClick={() => handleModClick(val)} className='mod'>Modifica</button></td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            {showForm &&

                <form>
                    <label>NOME:</label><br />
                    <input type="text" onChange={(name) => SetName(name.target.value)} value={name} /><br />
                    <label>ETA':</label><br />
                    <input type="text" onChange={(age) => SetAge(age.target.value)} value={age} /><br />
                    <label>GENERE:</label><br />
                    <input type="text" onChange={(gender) => SetGender(gender.target.value)} value={gender} /><br /><br />
                    <button onClick={() => addStudent()}>Salva</button>
                </form>


            }

            {showFormMod &&
                            <form>
                            <label>NOME:</label><br />
                            <input type="text" onChange={(name) => SetName(name.target.value)} value={name} /><br />
                            <label>ETA':</label><br />
                            <input type="text" onChange={(age) => SetAge(age.target.value)} value={age} /><br />
                            <label>GENERE:</label><br />
                            <input type="text" onChange={(gender) => SetGender(gender.target.value)} value={gender} /><br /><br />
                            <button onClick={() => modifica()}>Modifica</button>
                        </form>
            
            }
        </div>
    );
}
export default Table;