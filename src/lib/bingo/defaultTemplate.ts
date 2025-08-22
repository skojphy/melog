export const DEFAULT_BINGO_LABELS = [
    "멜로버 1기 가입함",
    "정동환의 성심당 추천 빵 먹어 봄",
    "b.stage 자유게시판에 글 3건 작성함",
    "멜로그에 티켓 3장 이상 작성함",
    "찬란한하루 챌린지 안 틀리고 할 수 있음",
    "김민석 생일을 알고 있음",
    "콘서트 5회 이상 관람함",
    "멜로망스 곡 피아노로 연주해 봄",
    "컴퓨터 배경화면이 멜로망스",
    "멜로버 2기 가입함",
    "LP 재생해서 노래 들어 봄",
    "‘Your Way’ 랩 파트 안 틀리고 외워서 부를 수 있음",
    "페스티벌 3회 이상 관람함",
    "굿즈/간식 나눔해 봄",
    "빅맥송 영상 찾아 봄",
    "콘서트 관람하다가 눈물 흘림",
    "멜론 친밀도 90도 이상임",
    "정동환 생일을 알고 있음",
    "b.stage에 공연 후기 1건 작성함",
    "핸드폰 배경화면이 멜로망스",
    "공식 MD 소장 중임",
    "방에 멜로망스 포스터/사진 붙여 놓음",
    "25년 대전 0시축제에서 김민석이 웃지 못한 이유를 앎",
    "멜로망스 데뷔일을 알고 있음",
    "밍티 입고 등교·출근해 봄"
];

export const STORAGE_KEY = 'melog-bingo-v1';

export const labelsToCells = (labels: string[]) => {
    return labels.map((label) => ({ label, checked: false }));
}

export const chunk = (arr: any[], size: number) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
}

export const countLines = (cells: any[]) => {
    const get = (r: number, c: number) => cells[r * 5 + c]?.checked;
    let lines = 0;
    for (let r = 0; r < 5; r++) if ([0, 1, 2, 3, 4].every((c) => get(r, c))) lines++;
    for (let c = 0; c < 5; c++) if ([0, 1, 2, 3, 4].every((r) => get(r, c))) lines++;
    if ([0, 1, 2, 3, 4].every((k) => get(k, k))) lines++;
    if ([0, 1, 2, 3, 4].every((k) => get(k, 4 - k))) lines++;
    return lines;
}

export const checkedCount = (cells: any[]) => {
    return cells.reduce((acc, cur) => acc + (cur.checked ? 1 : 0), 0);
}
