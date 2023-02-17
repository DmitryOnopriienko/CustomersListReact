import PageAccessValidator from "../components/PageAccessValidator";
import PageContainer from "../components/PageContainer";
import CustomersPage from "../pages/Customers";

const Customers = () => {
  return (
      <PageAccessValidator>
        <PageContainer>
          <CustomersPage />
        </PageContainer>
      </PageAccessValidator>
  )
};

export default Customers;