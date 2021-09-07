import React, { useEffect, useState } from "react";
import TopTable from "../components/TopTable";
import TireProfile from "../components/TireProfile";
import MiddleTable from "../components/MiddleTable";
import API, { graphqlOperation } from "@aws-amplify/api";
import { getTireCheckinfo, getTireProfile, } from "../graphql/queries";


function Home(props) {

  const [topTable, setTopTable] = useState([]);

  useEffect(() => {
    API.graphql(graphqlOperation(getTireCheckinfo, { id: '0f100bf3-a70e-4467-afff-2d24a7ebd90a' })).then((data) => {
      setTopTable(data.data.getTireCheckinfo.topTable);
    });
  }, []);

  return (
    <>
      <TopTable data={topTable} />
      <MiddleTable />
      <TireProfile />
    </>
  );
}

export default Home;
