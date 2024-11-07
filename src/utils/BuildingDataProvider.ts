import { useState, useEffect } from 'react';
import data from '../data/building.json'

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  //FILL HERE LOGIC TO SET THE BUILDING DATA
  const handleGetData = ()=>{
    setBuildingData(data)
  }
  useEffect(() => {
    handleGetData();
  }, []); 

  

  const getFloorByIndex = (floorIndex:number): Floor |undefined =>
  {
    if(floorIndex < 0 || floorIndex > 4)
    {
      return undefined
    }
    console.log("hgrfed",buildingData[floorIndex]);
    
    return buildingData[floorIndex]
    //FILL HERE
  }
  const getListOfActivities = ():string[]=>{
    const Activities:string[]  = buildingData.map(e=> e.activity)
    return Activities
    //FILL HERE
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
