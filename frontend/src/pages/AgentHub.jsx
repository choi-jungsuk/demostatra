import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider.jsx';
import '../ui/OverviewBento.css';

const businessAgents = [
  {
    id: 'exhibitor',
    step: '01',
    titleKo: '참가기업 발굴',
    titleEn: 'Exhibitor Discovery',
    copyKo: '전시회·시장개척단 조건에 맞는 참가기업 후보를 탐색하고 정보를 정리합니다.',
    copyEn: 'Find and organize exhibitor candidates matching exhibition requirements.',
    link: '/ax-data',
  },
  {
    id: 'market',
    step: '02',
    titleKo: '참가기업의 글로벌 마케팅',
    titleEn: 'Global Marketing for Exhibitors',
    copyKo: '전시회·시장개척단 참가기업의 해외시장 조사·유튜브 홍보영상·지역전문가 컨설팅을 지원합니다.',
    copyEn: 'Support overseas market research, YouTube promotional videos, and local expert consulting for exhibitors.',
    link: '/consultants',
  },
  {
    id: 'buyer',
    step: '03',
    titleKo: '바이어 발굴·B2B 매칭',
    titleEn: 'Buyer Discovery & B2B Match',
    copyKo: '해외 바이어와 파트너 후보를 탐색하고 매칭 근거를 확인합니다.',
    copyEn: 'Search buyer and partner candidates with matching evidence.',
    link: '/partner-search',
  },
  {
    id: 'schedule',
    step: '04',
    titleKo: '상담일정 관리',
    titleEn: 'Schedule Management',
    copyKo: '온라인·현장 상담 일정과 승인 상태를 관리합니다.',
    copyEn: 'Manage online and onsite meeting schedules and approvals.',
    link: '/schedule',
  },
  {
    id: 'aftercare',
    step: '05',
    titleKo: '사후관리',
    titleEn: 'Aftercare',
    copyKo: '상담 결과와 후속 조치 상태를 체계적으로 관리합니다.',
    copyEn: 'Track meeting outcomes and follow-up actions systematically.',
    link: '/aftercare',
  },
];

export default function AgentHub() {
  const { lang } = useI18n();
  const navigate = useNavigate();
  const isKo = lang === 'ko';

  return (
    <div className="demo-ops-home">
      <section className="demo-ops-hero" aria-labelledby="demo-ops-hero-title">
        <div className="demo-ops-flow" aria-hidden="true"><i /><i /><i /><span /><span /></div>
        <p className="demo-ops-eyebrow">{isKo ? 'AI 기반 전시회 운영 AX 플랫폼' : 'EXHIBITION OPERATIONS WORKFLOW'}</p>
        <h1 id="demo-ops-hero-title">{isKo ? '전시회 운영 업무를 AI 기반 AX로 전환합니다.' : 'Organize every exhibition operation in one place.'}</h1>
        <p className="demo-ops-subtitle">{isKo ? <>참가기업 발굴부터 해외 바이어 관리, 상담일정, 사후관리까지<br className="demo-ops-desktop-br" />담당자 검토와 승인을 중심으로 연결합니다.</> : 'Manage exhibitor discovery, buyers, B2B meetings, and aftercare through clear review and approval workflows.'}</p>
        <button type="button" className="demo-ops-cta" onClick={() => navigate('/overview')}>
          {isKo ? '전시 운영 현황 보기' : 'View Operations Overview'} <span aria-hidden="true">→</span>
        </button>
      </section>

      <section className="demo-ops-workflow" aria-labelledby="demo-ops-workflow-title">
        <div className="demo-ops-section-heading"><h2 id="demo-ops-workflow-title">{isKo ? '참가기업 발굴서부터 사후관리까지, 하나의 흐름으로' : 'From exhibitor discovery to aftercare, in one workflow.'}</h2></div>
        <div className="demo-ops-card-grid">
          {businessAgents.map((agent) => <article className="demo-ops-card" key={agent.id}>
            <span className="demo-ops-step">{agent.step}</span>
            <strong>{isKo ? agent.titleKo : agent.titleEn}</strong>
            <small>{isKo ? agent.copyKo : agent.copyEn}</small>
            <button type="button" className="demo-ops-card-link" onClick={() => navigate(agent.link)}>{isKo ? '업무 보기' : 'Open task'} <b aria-hidden="true">→</b></button>
          </article>)}
        </div>
      </section>
    </div>
  );
}
