export type SocialAxis = 'solo' | 'group';
export type FocusAxis = 'lyrics' | 'melody';
export type VibeAxis = 'ballad' | 'upbeat';

export type LikertQuestion = {
    id: number;
    axis: 'social' | 'focus';
    type: 'either';
    text: string;
    leftChoice: { label: string; value: SocialAxis | FocusAxis };
    rightChoice: { label: string; value: SocialAxis | FocusAxis };
};

export type EitherQuestion = {
    id: number;
    axis: 'vibe';
    type: 'either';
    text: string;
    leftChoice: { label: string; value: VibeAxis };
    rightChoice: { label: string; value: VibeAxis };
};

export type Question = LikertQuestion | EitherQuestion;
export type AnswerMap = Record<number, string>;

export type AxisScore = {
    social: { solo: number; group: number };
    focus: { lyrics: number; melody: number };
    vibe: { ballad: number; upbeat: number };
};

export type AxesResult = {
    social: SocialAxis;
    focus: FocusAxis;
    vibe: VibeAxis;
    raw: AxisScore;
};

export type TypeInfo = {
    name: string;
    description: string;
    examples?: string[];
};