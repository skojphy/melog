import type { TypeInfo } from "$lib/types";

export const TYPE_MAP: Record<string, TypeInfo> = {
    'solo-lyrics-ballad': {
        name: '감성 독백가',
        description:
            '조용히 혼자만의 세계에서 발라드를 곱씹는 사색가. 가사 속 이야기에 깊이 빠지고, 한 단어 한 단어를 오래 음미합니다.',
        examples: ['선물', '고백']
    },
    'solo-lyrics-upbeat': {
        name: '햇살 시인',
        description:
            '경쾌한 곡 속에서도 이야기를 찾아내는 낙관적 감상러. 밝은 사운드에 숨은 메시지를 발견하는 순간을 즐깁니다.',
        examples: ['부끄럼', '동화']
    },
    'solo-melody-ballad': {
        name: '멜로디 수집가',
        description:
            '발라드의 섬세한 선율과 화성 흐름을 탐험하는 연구가형. 보컬 뉘앙스·피아노 한 구절이 오래 기억에 남습니다.',
        examples: ['You', '사랑인가 봐']
    },
    'solo-melody-upbeat': {
        name: '리듬 방랑자',
        description:
            '경쾌한 그루브에 몸을 맡기는 자유로운 솔로러. 가사보다 비트와 레이어 변화에 민감하고 반복 청취를 즐깁니다.',
        examples: ['Nice to Meet You', '동화']
    },
    'group-lyrics-ballad': {
        name: '감정 공유가',
        description:
            '발라드의 깊은 이야기를 함께 나누는 따뜻한 커뮤니티형. 공연 뒤 가사 분석 토크로 공감대를 만듭니다.',
        examples: ['선물', '짙어져']
    },
    'group-lyrics-upbeat': {
        name: '이야기 전도사',
        description:
            '경쾌한 곡에서도 숨은 스토리를 찾아 모두에게 전하는 설명가. 밝은 에너지로 주변의 기분을 끌어올립니다.',
        examples: ['부끄럼', '초대']
    },
    'group-melody-ballad': {
        name: '선율 해설가',
        description:
            '발라드의 선율·편곡 포인트를 짚어주는 음악 토론가. 라이브와 스튜디오의 차이를 함께 발견합니다.',
        examples: ['You', '사랑인가 봐']
    },
    'group-melody-upbeat': {
        name: '무드 메이커',
        description:
            '경쾌한 리듬을 친구들과 함께 즐기는 에너지형. 박수·클랩 타이밍을 주도하며 분위기를 최고조로 만듭니다.',
        examples: ['동화', 'Nice to Meet You']
    }
};
