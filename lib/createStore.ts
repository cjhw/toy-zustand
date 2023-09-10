function createStore(createState) {
  let state;
  const listeners = new Set<(state, prevState) => void>();
  // 获取store内容
  const getState = () => state;
  // 更新store内容
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;

    if (nextState !== state) {
      const prevState = state;
      state = replace ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, prevState));
    }
  };
  // 添加订阅信息
  const subscribe = (listener) => {
    listeners.add(listener);
    // 清除订阅信息
    return () => {
      listeners.delete(listener);
    };
  };
  // 清除所有的listener
  const destroy = () => listeners.clear();

  const api = { getState, setState, destroy, subscribe };
  // 创建初始的state
  state = createState(setState, getState, api);

  return api;
}

export default createStore;
