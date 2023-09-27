import Research from "../Components/research";
import Navbar from "../Components/navbar";
import club_data from '../club_data.json';

const ResearchPage = () => {
  return (
    <div>
    <Navbar/>
    <div style={{width:"90%", margin:'auto'}}>
    <Research data = {club_data}/>
    </div>
    </div>
  );
};
export default ResearchPage;
