import * as React from "react"
import { Link, HeadFC, graphql, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Frame from "../layouts/layout"

const IndexPage = ({ data: { site } }: PageProps<Queries.IndexPageQuery>) => {
  const name = site?.meta?.title
  const email = site?.meta?.email
  const wa = site?.meta?.wa
  const linkin = site?.meta?.linkin
  return (
    <Frame name={name} email={email} wa={wa} linkin={linkin}>     
      {/* Content */}
      <section>
        <div className="w-full text-sm lg:text-base space-y-4">          
          {/* Publications */}
          <div className="mx-auto max-w-xs sm:max-w-2xl lg:max-w-4xl space-y-2">
            <h4 className="md:text-lg md:font-semibold">Publications</h4>
            <p className="px-4 py-1 rounded-full bg-teal-600 text-white font-semibold w-max h-max">2022</p>
            <ul className=" list-disc list-outside pl-4">
              <li className="hover:text-sky-600">
                <Link
                  to="https://www.researchgate.net/publication/362760370_Delineation_method_of_the_archaeological_structure_of_Kuta_Batee_Trumon_fortress_South_Aceh_based_on_a_total_magnetic_field_anomaly"
                >
                  Delineation method of the archaeological structure of Kuta Batee Trumon fortress, South Aceh based on a total magnetic field anomal
                </Link>
              </li>
            </ul>
            <p className="px-4 py-1 rounded-full bg-teal-600 text-white font-semibold w-max h-max">2021</p>
            <ul className=" list-disc list-outside pl-4">
              <li className="hover:text-sky-600">
                <Link
                  to="https://iopscience.iop.org/article/10.1088/1755-1315/674/1/012063"
                >
                  Identification of Fishing Ground Hotspot of Traditional Purse Seine Fisher at Northern Waters of Aceh–A Community-Based Data Collection Approach
                </Link>
              </li>
              <li className="hover:text-sky-600">
                <Link
                  to="https://iopscience.iop.org/article/10.1088/1757-899X/1087/1/012026"
                >
                  Assessment of Regional Spatial Plan (RSP) of Areas Along the Active Fault of Seulimeum Segment in Aceh Province
                </Link>
              </li>
              <li className="hover:text-sky-600">
                <Link
                  to="https://doaj.org/article/64d26eefdb9e4b68b9ba980c6efabd69"
                >
                  Near surface electrical resistivity structures around an active fault trace in Weh Island, Indonesia
                </Link>
              </li>
            </ul>
            <p className="px-4 py-1 rounded-full bg-teal-600 text-white font-semibold w-max h-max">2020</p>
            <ul className=" list-disc list-outside pl-4">
              <li className="hover:text-sky-600">
                <Link
                  to="https://searchworks.stanford.edu/articles/edb__146803808"
                >
                  Mapping Faults Distribution Based on Dem Data for Regional Spatial Plan Assessment of Sabang Municipality, Indonesia
                </Link>
              </li>
              <li className="hover:text-sky-600">
                <Link
                  to="https://jurnal.unsyiah.ac.id/JRE/article/view/14907"
                >
                  Pemetaan Endapan Mineral Teralterasi Hidrotermal Menggunakan Analisis Citra Landsat 8 di Sekitar Gunung Api Bur Ni Geureudong, Kabupaten Bener Meriah, Aceh
                </Link>
              </li>
            </ul>
            <p className="px-4 py-1 rounded-full bg-teal-600 text-white font-semibold w-max h-max">2019</p>
            <ul className=" list-disc list-outside pl-4">
              <li className="hover:text-sky-600">
                <Link
                  to="https://jurnal.unsyiah.ac.id/JAcPS/article/view/12764"
                >
                  Fault Mapping in Weh Island based on Fault Fracture Density Method (FFD)
                </Link>
              </li>
              <li className="hover:text-sky-600">
                <Link
                  to="https://iopscience.iop.org/article/10.1088/1755-1315/364/1/012003"
                >
                  Interpretation of gravity satellite data to delineate structural features connected to geothermal resources at Bur Ni Geureudong geothermal field
                </Link>
              </li>
            </ul>
            <p className="px-4 py-1 rounded-full bg-teal-600 text-white font-semibold w-max h-max">2018</p>
            <ul className=" list-disc list-outside pl-4">
              <li className="hover:text-sky-600">
                <Link
                  to="https://www.sciencedirect.com/science/article/abs/pii/S0964569117301692"
                >
                  Application of Rapid Appraisals of Fisheries Management System (RAFMS) to identify the seasonal variation of fishing ground locations and its corresponding fish species availability at Aceh waters, Indonesia
                </Link>
              </li>
            </ul>
            <p className="px-4 py-1 rounded-full bg-teal-600 text-white font-semibold w-max h-max">2016</p>
            <ul className=" list-disc list-outside pl-4">
              <li className="hover:text-sky-600">
                <Link
                  to="https://www.sciencedirect.com/science/article/abs/pii/S2352485516302146"
                >
                  Preliminary study of the sea surface temperature (SST) at fishing ground locations based on the net deployment of traditional purse-seine boats in the northern waters of Aceh — A community-based data collection approach
                </Link>
              </li>
            </ul>
          </div>
          {/* Experiences */}
          <div className="mx-auto max-w-xs sm:max-w-2xl lg:max-w-4xl space-y-2">
            <h4 className="md:text-lg md:font-semibold">Experiences</h4>
            <div>
              <table border={0} cellPadding={4} cellSpacing={16}>
                <tr className="space-x-4">
                  <td>2022 &#8208; Present</td>
                  <td><b>Lecturers</b> in Marine Science, Faculty of Marine Sciences and Fisheries, Universitas Syiah Kuala</td>
                </tr>
                <tr className="space-x-4">
                  <td>2022 &#8208; Present</td>
                  <td><b>Researcher</b> in Tsunami and Disaster Mitigation Research Center (TDMRC) Universitas Syiah Kuala</td>
                </tr>
                <tr className="space-x-4">
                  <td>2022 &#8208; Present</td>
                  <td><b>Researcher</b> in Ethnoscience Research Center (PRE) Universitas Syiah Kuala</td>
                </tr>
                <tr className="space-x-4">
                  <td>2022 &#8208; Present</td>
                  <td><b>Researcher</b> in Marine and Fisheries Research Center (PRKP) Universitas Syiah Kuala</td>
                </tr>
                <tr className="space-x-4">
                  <td>Oct 2020 &#8208; Mar 2022</td>
                  <td><b>Member of Sumatran team</b> for paleo-tsunami fieldwork along the West Coast of Aceh - Sumatra from Earth Observatory of Singapore (EOS) - Nanyang Technological University - NTU Singapore</td>
                </tr>
                <tr className="space-x-4">
                  <td>2019</td>
                  <td><b>Data collector</b> Pemetaan Struktur Benteng Kuta Batee Kerajaan Trumon Menggunakan Metode Dc-Resistivity.</td>
                </tr>
                <tr className="space-x-4">
                  <td>2018</td>
                  <td><b>Data collector</b>Jejak Rekam Bencana Purba pada Situs Cot Astana Peninggalan Samudra Pasai untuk Memperkuat Lesson Learned Masyarakat dalam upaya Pengurangan Risiko Bencana.</td>
                </tr>
                <tr className="space-x-4">
                  <td>2016 &#8208; 2018</td>
                  <td><b>Research Assistant </b> Kajian Geofisika, Geokimia, dan Remote Sensing untuk Eksplorasi Panas Bumi Di Kabupaten Bener Meriah, Provinsi Aceh</td>
                </tr>
                <tr className="space-x-4">
                  <td>2016 &#8208; 2018</td>
                  <td><b>Research Team</b> Kajian Ekstensi Zona Patahan Great Sumatra Fault Segmen Seulimeum pada Wilayah Perairan Utara Aceh</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>     
    </Frame>
  )
}

export default IndexPage

export const Head: HeadFC<Queries.IndexPageQuery> = props => { 
  return (
    <>
      <title>Welcome | { props.data.site?.meta?.title }</title>
      <meta name="description" content={`Personal portfolio ${ props.data.site?.meta?.title }`}></meta>
    </>
  )
}

export const query = graphql`
  query IndexPage { 
    site {
      meta: siteMetadata {
        title
        email
        wa
        linkin
        author
      }
    }
  }
`
