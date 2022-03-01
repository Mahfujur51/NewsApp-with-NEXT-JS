import Head from 'next/head'
import { Toolbar } from '../../components/Toolbar';

import classes from './../../styles/Eom.module.css'


export default function Eom({employee}) {
  console.log(employee)
  return (
    <div className="page-container">
      <Toolbar/>
      <div className={classes.main}>
        <h1>Employee of The Year</h1>
        <div className={classes.employeeOfTheMonth}>
          <h3>{employee.name}</h3>
          <h6>{employee.position}</h6>
          <img src={employee.image} />
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth`)
  const employee = await res.json()
  return { props: { employee } }
}
