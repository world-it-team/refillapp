/* eslint-disable */
// this is an auto generated file. This will be overwritten


export const getTireKart = /* GraphQL */ `
  query GetTireKart($id: ID!) {
    getTireKart(id: $id) {
      id
      controlNumber
      contractorName
      location
      vehicleType
      number
      wareHouse
      contractPeriod
      contractType
      searchDate
      status
      tireType
      wheel
      runFlood
      recommended
      usedTime
      checkProductResult {
        recombinationIO
        alignment
        check
        punctureIns
        replacementOrRepair
        judgement
      }
      tire1 {
        name
        tireNumber
        image
        tireInfomation
        makerVersion
        measurement {
          alignment
          checkFillAir
          punctureInsp
          recombinIO
          tireReplaceJdg
          wheelReplace
          yearManufacJdg
        }
        status {
          airFlow
          crack
          foreignObjectStab
          nutSearWear
          remainGroove
          separation
          unevenWear
          wheelCorrosion
          wheelRimBend
          }
        comment
      }
       tire2 {
        name
        tireNumber
        image
        tireInfomation
        makerVersion
        measurement {
          alignment
          checkFillAir
          punctureInsp
          recombinIO
          tireReplaceJdg
          wheelReplace
          yearManufacJdg
        }
        status {
          airFlow
          crack
          foreignObjectStab
          nutSearWear
          remainGroove
          separation
          unevenWear
          wheelCorrosion
          wheelRimBend
          }
        comment
      }
       tire3 {
        name
        tireNumber
        image
        tireInfomation
        makerVersion
        measurement {
          alignment
          checkFillAir
          punctureInsp
          recombinIO
          tireReplaceJdg
          wheelReplace
          yearManufacJdg
        }
        status {
          airFlow
          crack
          foreignObjectStab
          nutSearWear
          remainGroove
          separation
          unevenWear
          wheelCorrosion
          wheelRimBend
          }
        comment
      }
       tire4 {
        name
        tireNumber
        image
        tireInfomation
        makerVersion
        measurement {
          alignment
          checkFillAir
          punctureInsp
          recombinIO
          tireReplaceJdg
          wheelReplace
          yearManufacJdg
        }
        status {
          airFlow
          crack
          foreignObjectStab
          nutSearWear
          remainGroove
          separation
          unevenWear
          wheelCorrosion
          wheelRimBend
          }
        comment
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTireKarts = /* GraphQL */ `
  query ListTireKarts(
    $filter: ModelTireKartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTireKarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        controlNumber
        contractorName
        location
        vehicleType
        number
        wareHouse
        contractPeriod
        contractType
        searchDate
        status
        tireType
        wheel
        runFlood
        recommended
        usedTime
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
