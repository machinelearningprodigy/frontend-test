import React, { useState } from 'react';
import styled from 'styled-components';
import { Home, Crown, Settings, CreditCard, LogOut } from 'lucide-react';

const SidebarContainer = styled.aside`
  width: 256px;
  background-color: white;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
`;

const SidebarHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

const SidebarNav = styled.nav`
  padding: 1rem;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: ${(props) => (props.active ? '#2563eb' : 'transparent')};
  color: ${(props) => (props.active ? 'white' : 'inherit')};

  &:hover {
    background-color: ${(props) => (props.active ? '#2563eb' : '#f3f4f6')};
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
`;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .header-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const Form = styled.form`
  max-width: 800px;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #374151;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
    font-size: 1rem;
    margin-bottom: 1rem;
    transition: border-color 0.2s;

    &:focus {
      outline: none;
      border-color: #2563eb;
    }
  }
`;

const SubCategories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const AddMoreButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: none;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  color: #374151;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`;

const SaveButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 2rem;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const AddServicePage = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f3f4f6;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const menuItems = [
  { icon: <Home size={20} />, text: 'Home' },
  { icon: <Crown size={20} />, text: 'Branding' },
  { icon: <Settings size={20} />, text: 'Services', active: true },
  { icon: <CreditCard size={20} />, text: 'Subscription' },
  { icon: <LogOut size={20} />, text: 'Log Out' },
];

const Sidebar = () => (
  <SidebarContainer>
    <SidebarHeader>
      <h2>ADMIN</h2>
    </SidebarHeader>
    <SidebarNav>
      {menuItems.map((item, index) => (
        <NavItem key={index} active={item.active}>
          {item.icon}
          <span>{item.text}</span>
        </NavItem>
      ))}
    </SidebarNav>
  </SidebarContainer>
);

const AddService = () => {
  const [serviceName, setServiceName] = useState('');
  const [subCategories, setSubCategories] = useState(['', '', '', '']);

  const handleAddMore = () => setSubCategories([...subCategories, '']);

  const handleSubCategoryChange = (index, value) => {
    const newSubCategories = [...subCategories];
    newSubCategories[index] = value;
    setSubCategories(newSubCategories);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      serviceName,
      subCategories: subCategories.filter((cat) => cat.trim() !== ''),
    });
  };

  return (
    <AddServicePage>
      <Sidebar />
      <MainContent>
        <PageHeader>
          <Settings className="header-icon" />
          <h1>Services | Add New</h1>
        </PageHeader>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <label>Name of the Service (category)</label>
            <input
              type="text"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              placeholder="Enter service name"
            />
          </InputGroup>
          <InputGroup>
            <label>Sub Categories</label>
            <SubCategories>
              {subCategories.map((category, index) => (
                <input
                  key={index}
                  type="text"
                  value={category}
                  onChange={(e) => handleSubCategoryChange(index, e.target.value)}
                  placeholder={`Enter sub category ${index + 1}`}
                />
              ))}
              <AddMoreButton type="button" onClick={handleAddMore}>
                + Add More
              </AddMoreButton>
            </SubCategories>
          </InputGroup>
          <SaveButton type="submit">SAVE</SaveButton>
        </Form>
      </MainContent>
    </AddServicePage>
  );
};

export default AddService;
