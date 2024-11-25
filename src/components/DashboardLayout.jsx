import React from 'react';
import styled from 'styled-components';
import { 
  Home, Crown, Settings, CreditCard, LogOut,
  Layout, Users, Briefcase, FileText, MessageSquare,
  ThumbsUp, Share2, HelpCircle, PhoneCall, Files,
  MessageCircle
} from 'lucide-react';

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f3f4f6;
`;

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

  &:hover {
    background-color: #f3f4f6;
  }

  &.active {
    background-color: #2563eb;
    color: white;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  .title {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  .banner {
    background-color: #ef4444;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: #1d4ed8;
  color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1e40af;
  }

  &.wide {
    grid-column: span 2;

    @media (max-width: 768px) {
      grid-column: auto;
    }
  }

  .content {
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    .icon {
      padding: 0.5rem;
      background-color: #3b82f6;
      border-radius: 0.5rem;
    }

    .text {
      h3 {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
      }

      p {
        color: #bfdbfe;
        font-size: 0.875rem;
      }
    }
  }
`;

// Navigation menu data
const menuItems = [
  { icon: <Home size={20} />, text: 'Home', active: true },
  { icon: <Crown size={20} />, text: 'Branding' },
  { icon: <Settings size={20} />, text: 'Services' },
  { icon: <CreditCard size={20} />, text: 'Subscription' },
  { icon: <LogOut size={20} />, text: 'Log Out' }
];

// Dashboard cards data
const cards = [
  {
    icon: <Crown className="icon" />,
    title: 'Branding',
    description: 'View or edit your logo, website title and tagline',
    className: 'wide'
  },
  {
    icon: <Settings className="icon" />,
    title: 'Services',
    description: 'Manage your services'
  },
  {
    icon: <Layout className="icon" />,
    title: 'Header',
    description: 'Manage the top section of your website'
  },
  {
    icon: <Users className="icon" />,
    title: 'Client Logos',
    description: 'Showcase your clients'
  },
  {
    icon: <FileText className="icon" />,
    title: 'About You',
    description: 'Manage the details about your work/yourself'
  },
  {
    icon: <Briefcase className="icon" />,
    title: 'Portfolio',
    description: "Manage the 'Portfolio' section of your website"
  },
  {
    icon: <FileText className="icon" />,
    title: 'Your Works',
    description: 'Showcase your works'
  },
  {
    icon: <Share2 className="icon" />,
    title: 'Comparison',
    description: 'Make yourself stand out by comparing your advantages with others'
  },
  {
    icon: <MessageSquare className="icon" />,
    title: 'Testimonials',
    description: "Manage client's reviews"
  },
  {
    icon: <HelpCircle className="icon" />,
    title: 'Q&A',
    description: 'Make it easier for your clients by answering the most asked questions'
  },
  {
    icon: <PhoneCall className="icon" />,
    title: 'CTA (Call To Action)',
    description: 'Generate a recall value to take an action by your clients'
  },
  {
    icon: <Share2 className="icon" />,
    title: 'Social Handles',
    description: 'Link your social networks'
  },
  {
    icon: <Files className="icon" />,
    title: 'Your Process',
    description: 'Describe your working process'
  },
  {
    icon: <MessageCircle className="icon" />,
    title: 'Other Pages',
    description: 'Contact Us, Privacy Policy, Refund Policy, Terms & Conditions'
  }
];

// Sidebar Component
const Sidebar = () => (
  <SidebarContainer>
    <SidebarHeader>
      <h2>ADMIN</h2>
    </SidebarHeader>
    <SidebarNav>
      {menuItems.map((item, index) => (
        <NavItem key={index} className={item.active ? 'active' : ''}>
          {item.icon}
          <span>{item.text}</span>
        </NavItem>
      ))}
    </SidebarNav>
  </SidebarContainer>
);

// Card Component
const DashboardCard = ({ icon, title, description, className = '' }) => (
  <Card className={className}>
    <div className="content">
      <div className="icon">{icon}</div>
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </Card>
);

// Main Dashboard Component
const DashboardLayout = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <Header>
          <div className="title">
            <Layout size={24} />
            <h1>Dashboard</h1>
          </div>
          <div className="banner">
            Your subscription ends on 01.11.2025
          </div>
        </Header>
        <CardGrid>
          {cards.map((card, index) => (
            <DashboardCard key={index} {...card} />
          ))}
        </CardGrid>
      </MainContent>
    </DashboardContainer>
  );
};

export default DashboardLayout;
