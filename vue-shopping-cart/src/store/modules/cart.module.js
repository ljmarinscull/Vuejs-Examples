
const cartList = JSON.parse(localStorage.getItem('cart'));

const state = cartList ? { cartList, cartTotal: calculateCartTotal(cartList), cartItems: calculateItemsTotal(cartList) } : { cartList: [], cartListTotal: 0, cartListItems: 0 };

const mutations = {
	ADD_PRODUCT(state, product) {
		const items = JSON.parse(localStorage.getItem('cart'))

		const cartItem = { ...product, amount: 1 }
		items.push(cartItem)
		localStorage.setItem('cart', JSON.stringify(items))
		state.cartList = items

		state.cartTotal = calculateCartTotal(items)
		state.cartItems = calculateItemsTotal(items)
	},
	INC_PRODUCT_AMOUNT(state, id) {
		const items = JSON.parse(localStorage.getItem('cart'))

		const item = items.find(it => it.id === id)
		item.amount += 1

		localStorage.setItem('cart', JSON.stringify(items))
		state.cartList = items

		state.cartTotal = calculateCartTotal(items)
		state.cartItems = calculateItemsTotal(items)

	},
	DEC_PRODUCT_AMOUNT(state, id) {
		const items = JSON.parse(localStorage.getItem('cart'))

		const item = items.find(it => it.id === id)
		if (item.amount === 0) return

		item.amount -= 1

		localStorage.setItem('cart', JSON.stringify(items))
		state.cartList = items

		state.cartTotal = calculateCartTotal(items)
		state.cartItems = calculateItemsTotal(items)
	},
	REMOVE_PRODUCT(state, id) {
		state.cartList = state.cartList.filter(it => it.id !== id)
		localStorage.setItem('cart', JSON.stringify(state.cartList))
	},
	CLEAR_CART(state) {
		state.cartList = []
		state.cartTotal = 0
		state.cartItems = 0
		localStorage.setItem('cart', JSON.stringify([]))
	}
};

function calculateCartTotal(list) {
	let temp = 0
	list.map(it => {
		temp += it.price * it.amount
	})
	return parseFloat(temp.toFixed(2))
}

function calculateItemsTotal(list) {
	let temp = 0
	list.map(it => temp += it.amount)
	return parseFloat(temp)
}

export const cart = {
	namespaced: true,
	state,
	mutations
};