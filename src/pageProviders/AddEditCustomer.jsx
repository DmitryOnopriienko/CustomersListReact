import PageContainer from "../components/PageContainer";
import PageAccessValidator from "../components/PageAccessValidator";
import AddEditCustomerPage from "../pages/AddEditCustomer";

const AddEditCustomer = () => {
  return (
      <PageAccessValidator>
        <PageContainer>
          <AddEditCustomerPage />
        </PageContainer>
      </PageAccessValidator>
  );
};

export default AddEditCustomer;