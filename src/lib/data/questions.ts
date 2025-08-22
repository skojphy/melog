import type { Question } from "$lib/types";

export const questions: Question[] = [
    {
        id: 1,
        axis: 'social',
        type: 'either',
        text: '콘서트를 간다면 나는…',
        leftChoice: { label: '혼자 조용히 즐기는 게 좋다', value: 'solo' },
        rightChoice: { label: '친구·팬들과 함께 즐기는 게 좋다', value: 'group' }
    },
    {
        id: 2,
        axis: 'social',
        type: 'either',
        text: '신곡이 나오면…',
        leftChoice: { label: '혼자 이어폰 끼고 조용히 듣는다', value: 'solo' },
        rightChoice: { label: '친구·팬에게 링크를 보내고 같이 듣는다', value: 'group' }
    },
    {
        id: 3,
        axis: 'social',
        type: 'either',
        text: '멜로망스 밈/짤을 보면…',
        leftChoice: { label: '혼자 웃고 끝낸다', value: 'solo' },
        rightChoice: { label: '공유하며 리액션을 주고받는다', value: 'group' }
    },

    {
        id: 4,
        axis: 'focus',
        type: 'either',
        text: '《괜찮아, 사랑해》를 듣고 드는 생각은?',
        leftChoice: { label: '정말 위로되는 가사다', value: 'lyrics' },
        rightChoice: { label: '음색과 선율이 미쳤다', value: 'melody' }
    },
    {
        id: 5,
        axis: 'focus',
        type: 'either',
        text: '《You》를 들을 때 더 먼저 와닿는 건?',
        leftChoice: { label: '가사의 고백과 메시지', value: 'lyrics' },
        rightChoice: { label: '피아노와 멜로디 라인', value: 'melody' }
    },
    {
        id: 6,
        axis: 'focus',
        type: 'either',
        text: '《짙어져》에서 가장 인상 깊은 건?',
        leftChoice: { label: '가사 속 깊은 그리움', value: 'lyrics' },
        rightChoice: { label: '감정이 실린 보컬과 화성 진행', value: 'melody' }
    },

    {
        id: 7,
        axis: 'vibe',
        type: 'either',
        text: '오늘 하루 기분이 다운될 때 듣고 싶은 건…',
        leftChoice: { label: '《선물》(잔잔한 발라드)', value: 'ballad' },
        rightChoice: { label: '《초대》(경쾌한 곡)', value: 'upbeat' }
    },
    {
        id: 8,
        axis: 'vibe',
        type: 'either',
        text: '퇴근길에 나를 더 힐링해주는 노래는?',
        leftChoice: { label: '하루를 마무리하게 해주는 잔잔한 노래 《짙어져》', value: 'ballad' },
        rightChoice: { label: '힘을 주는 경쾌한 노래 《부끄럼》', value: 'upbeat' }
    },
    {
        id: 9,
        axis: 'vibe',
        type: 'either',
        text: '휴일 오후, 카페에서 들으면 더 좋은 건?',
        leftChoice: { label: '《고백》(발라드)', value: 'ballad' },
        rightChoice: { label: '《Nice to Meet You》(경쾌)', value: 'upbeat' }
    }
];