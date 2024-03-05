import Button from 'react-bootstrap/Button';
const boldStyle = { fontWeight: 'bold' };
const headersize = { fontSize: '25px' };



const AdoptApplication = () => {
    return (
        <div className='inquirybackdrop'>
            <h1 className='inquiryheader'>Submit Inquiry for Adoption</h1> 
            <div className='inquirycontainer'>
               <p style={headersize}>Contact Info</p>
               <p style={boldStyle}>Name:</p>
               <p>(User's name goes here)</p>
               <p style={boldStyle}>Email: </p>
               <p>(User's email goes here)</p>
               <p style={boldStyle}>Zip Code: </p>
               <p>(User's zip code goes here)</p>
               <p style={boldStyle}>Phone Number:</p>
               <input type="text" />
               <p>
                   <input type="checkbox" id="confirmationCheckbox" />
                   <label htmlFor="confirmationCheckbox">
                    I understand this form is only an inquiry and is NOT an application for adoption.
                       I understand that information I submit is going both to Petfinder and to the shelter,
                       and that Petfinder is not responsible for interactions with the shelter.
                   </label>
               </p>
                <Button className='button'>Send Inquiry</Button>
            </div>
        </div>
    )    
}
    export default AdoptApplication;