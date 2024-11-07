import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  const indexRole = roles.indexOf(role)
  const indexActivity = activities.indexOf(activity)
  console.log("role",role);
  console.log("indexActivity",indexActivity);

  
  if(indexRole >= indexActivity )
  {
    return true
  }
  else return false
  
  //FILL HERE 3.7
};

export default useIsVerified;
