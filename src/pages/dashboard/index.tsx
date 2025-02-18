import Dashboard from "@/components/dashboard/Dashboard";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #000b1d;
  width: 100%;
`;

const dashboard = () => {
  return (
    <Wrapper>
      <Dashboard />
    </Wrapper>
  );
};

export default dashboard;
