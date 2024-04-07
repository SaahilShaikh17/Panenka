//footer.jsx
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='black' className='text-center text-lg-start text-white'>
      <section className='d-flex justify-content-center justify-content-lg-between p-1 border-bottom'>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                PANEKA
              </h6>
              <p>
                We, as your amicable neighbourhood MANCHESTER UNITED fans, have crafted this with unwavering dedication and a strong desire to dominate in our upcoming UNITED ERA.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/table' className='text-reset'>
                  Table
                </a>
              </p>
              <p>
                <a href='/news' className='text-reset'>
                  News
                </a>
              </p>
              <p>
                <a href='/about' className='text-light text-reset'>
                  About
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Pune, Maharashtra, India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                paneka@paneka.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: ' #f43d28' , fontfamily:'Jockey One'}}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          PANEKA
        </a>
      </div>
    </MDBFooter>
  );
}