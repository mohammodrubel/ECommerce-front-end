import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './featchers/product/ProductSlice'
import { productApi } from './featchers/product/productApi'
import cartSlice from './featchers/cart/cartSlice'
import wishListSlice from './featchers/wishlist/wishListSlice'
import authSlice from './featchers/authinticationFeatchers/authSlice'
import { persistStore, persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key:'auth',
  storage
}
const persistAuthReducers = persistReducer(persistConfig,authSlice)


export const store = configureStore({
  reducer: {
        [productApi.reducerPath]:productApi.reducer,
        products:ProductSlice,
        wishList:wishListSlice,
        cart:cartSlice,
        auth:persistAuthReducers
  },
  middleware:(getDefaultMiddelware)=>getDefaultMiddelware({serializableCheck:{
    ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
  }}).concat(productApi.middleware)
})

export const persistor = persistStore(store)