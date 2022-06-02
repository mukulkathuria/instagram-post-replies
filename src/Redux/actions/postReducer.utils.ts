import { commentsDto } from 'src/Data/data.dto';
import { uid } from 'src/utils/common.uttils';

/* eslint-disable no-unreachable-loop */
// eslint-disable-next-line consistent-return
export function addRepliesToArray(id: string, comments: Array<commentsDto>): any {
  for (let i = 0; i < comments.length; i += 1) {
    if (comments[i].id === id) {
      return comments[i].reply.push({
        id: uid(),
        user: 'mukul_kathuria',
        comment: 'its automatic reply',
        reply: []
      });
    }
    return addRepliesToArray(id, comments[i].reply);
  }
}
