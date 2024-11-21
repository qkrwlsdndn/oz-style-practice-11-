import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const Image = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-bottom: 3px;
  min-height: 225px;
`;

const Tag = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.tag};
  border: 1px solid ${({ theme }) => theme.colors.tag};
  padding: 4px 5px;
  border-radius: 3px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Subtitle = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray};
`;

export default function Content({ content }) {
  return (
    <ContentContainer>
      <Image src={content.img} alt={content.title} />
      <Tag>모집중</Tag>
      <Title>{content.title}</Title>
      <Subtitle>{content.subtitle}</Subtitle>
    </ContentContainer>
  );
}
