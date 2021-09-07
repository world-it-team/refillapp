import React, { useEffect, useState } from "react";
import TopTable from "../components/TopTable";
import TireProfile from "../components/TireProfile";
import MiddleTable from "../components/MiddleTable";
import API, { graphqlOperation } from "@aws-amplify/api";
import { getTireKart, listTireKarts } from "../graphql/customqueries";


function Home(props) {

  const [data, setData] = useState(null);

  useEffect(() => {
    API.graphql(graphqlOperation(getTireKart, { id: 'c521077f-aa62-44b5-bc5b-5fce35f440cc' })).then((data) => {
      setData(data.data.getTireKart);
    });
  }, []);

  return (
    data &&
    <>
      <TopTable data={data} />
      <MiddleTable data={data} />
      <TireProfile data={data} />
    </>
  );
}

export default Home;
