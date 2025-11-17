import './TasksTable.css'

import { agents } from '../../../data/tables/tasks'

const TasksTable = () => {

    const dates1 = [4, 16, 28]
    const dates2 = [6, 18, 30]
    const dates3 = [8, 20, '']
    const dates4 = [10, 22, '']
    const dates5 = [12, 24, '']
    const dates6 = [14, 26, '']

    return (

        <div className='TasksTable'>

            <table>
                <thead>
                    <tr>
                        <th style={{ background: 'transparent', border: 'unset' }}></th>
                        <th style={{ background: 'transparent', border: 'unset' }}></th>
                        <th colSpan={6}>dates</th>
                        <th style={{ background: 'transparent', border: 'unset' }}></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td className='days'>sab</td>
                        <td className='days'>seg</td>
                        <td className='days'>qua</td>
                        <td className='days'>sex</td>
                        <td className='days'>dom</td>
                        <td className='days'>ter</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td className='dates'>{dates1[0]}</td>
                        <td className='dates'>{dates2[0]}</td>
                        <td className='dates'>{dates3[0]}</td>
                        <td className='dates'>{dates4[0]}</td>
                        <td className='dates'>{dates5[0]}</td>
                        <td className='dates'>{dates6[0]}</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td className='days'>qui</td>
                        <td className='days'>sab</td>
                        <td className='days'>seg</td>
                        <td className='days'>qua</td>
                        <td className='days'>sex</td>
                        <td className='days'>dom</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td className='dates'>{dates1[1]}</td>
                        <td className='dates'>{dates2[1]}</td>
                        <td className='dates'>{dates3[1]}</td>
                        <td className='dates'>{dates4[1]}</td>
                        <td className='dates'>{dates5[1]}</td>
                        <td className='dates'>{dates6[1]}</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td className='days'>ter</td>
                        <td className='days'>qui</td>
                        <td className='days'>sab</td>
                        <td className='days'>seg</td>
                        <td className='days'>qua</td>
                        <td className='days'>sex</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td className='dates'>{dates1[2]}</td>
                        <td className='dates'>{dates2[2]}</td>
                        <td className='dates'>{dates3[2]}</td>
                        <td className='dates'>{dates4[2]}</td>
                        <td className='dates'>{dates5[2]}</td>
                        <td className='dates'>{dates6[2]}</td>
                    </tr> 

                    {agents.map((agent) => (


                        agent.id === 1 ?

                            <tr key={agent.id}>
                                <td className='agents_title' rowSpan={8}>agents</td>
                                <td className='agent_name'>
                                    {agent.name}
                                </td>
                                <td className={agent.id % 2 === 0 ? 'even' : 'odd'}>
                                    <span className={`${agent.schema1[0]}`}>{agent.schema1[0]}</span>-
                                    <span className={`${agent.schema1[1]}`}>{agent.schema1[1]}</span>
                                </td>
                                <td className={agent.id % 2 === 0 ? 'even' : 'odd'}>
                                    <span className={`${agent.schema2[0]}`}>{agent.schema2[0]}</span>-
                                    <span className={`${agent.schema2[1]}`}>{agent.schema2[1]}</span>
                                </td>
                                <td className={agent.id % 2 === 0 ? 'even' : 'odd'}>
                                    <span className={`${agent.schema3[0]}`}>{agent.schema3[0]}</span>-
                                    <span className={`${agent.schema3[1]}`}>{agent.schema3[1]}</span>
                                </td>
                                <td className={agent.id % 2 === 0 ? 'even' : 'odd'}>
                                    <span className={`${agent.schema4[0]}`}>{agent.schema4[0]}</span>-
                                    <span className={`${agent.schema4[1]}`}>{agent.schema4[1]}</span>
                                </td>
                                <td className={agent.id % 2 === 0 ? 'even' : 'odd'}>
                                    <span className={`${agent.schema5[0]}`}>{agent.schema5[0]}</span>-
                                    <span className={`${agent.schema5[1]}`}>{agent.schema5[1]}</span>
                                </td>
                                <td className={agent.id % 2 === 0 ? 'even' : 'odd'}>
                                    <span className={`${agent.schema6[0]}`}>{agent.schema6[0]}</span>-
                                    <span className={`${agent.schema6[1]}`}>{agent.schema6[1]}</span>
                                </td>
                                <td className='schemas_title' rowSpan={8}>schemas</td>

                            </tr>

                            :

                            <tr key={agent.id}>
                                <td className='agent_name'>
                                    {agent.name}
                                </td>
                                <td className={agent.id % 2 === 0 ? 'even' : 'odd'}>
                                    <span className={`${agent.schema1[0]}`}>{agent.schema1[0]}</span>-
                                    <span className={`${agent.schema1[1]}`}>{agent.schema1[1]}</span>
                                </td>
                                <td className={agent.id % 2 === 0 ? 'even' : 'odd'}>
                                    <span className={`${agent.schema2[0]}`}>{agent.schema2[0]}</span>-
                                    <span className={`${agent.schema2[1]}`}>{agent.schema2[1]}</span>
                                </td>
                                <td className={agent.id % 2 === 0 ? 'even' : 'odd'}>
                                    <span className={`${agent.schema3[0]}`}>{agent.schema3[0]}</span>-
                                    <span className={`${agent.schema3[1]}`}>{agent.schema3[1]}</span>
                                </td>
                                <td className={agent.id % 2 === 0 ? 'even' : 'odd'}>
                                    <span className={`${agent.schema4[0]}`}>{agent.schema4[0]}</span>-
                                    <span className={`${agent.schema4[1]}`}>{agent.schema4[1]}</span>
                                </td>
                                <td className={agent.id % 2 === 0 ? 'even' : 'odd'}>
                                    <span className={`${agent.schema5[0]}`}>{agent.schema5[0]}</span>-
                                    <span className={`${agent.schema5[1]}`}>{agent.schema5[1]}</span>
                                </td>
                                <td className={agent.id % 2 === 0 ? 'even' : 'odd'}>
                                    <span className={`${agent.schema6[0]}`}>{agent.schema6[0]}</span>-
                                    <span className={`${agent.schema6[1]}`}>{agent.schema6[1]}</span>
                                </td>
                            </tr>
                    ))}

                </tbody>

            </table>

        </div>
    )
}

export default TasksTable