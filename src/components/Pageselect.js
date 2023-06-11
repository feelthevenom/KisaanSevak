import React ,{useState} from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';




export default function Pageselect() {

var back={backgroundColor: "transparent",border:"0%",color:"black"};
const [count,setCount]=useState(1);

    function Prev()
    {
        if(count!==1)
            setCount(count-1);

        }
function Next()
{
    setCount(count+1);
    back.backgroundColor="black";
}

  return (
    <nav aria-label='Page navigation example'>
      <MDBPagination className='mb-0'>
        <MDBPaginationItem>
          <MDBPaginationLink href='#' style={back} className='prev' onClick={Prev}>Previous</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#' style={back}>{count}</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#' style={back}>{count+1}</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#' style={back}>{count+2}</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#' style={back} className='next' onClick={Next}>Next</MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </nav>
  );
}