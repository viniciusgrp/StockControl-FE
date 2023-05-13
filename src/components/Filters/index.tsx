import { useDispatch } from "react-redux";
import { FiltersStyle } from "./style";
import { useState } from "react";
import {BsListCheck, BsFillGrid3X3GapFill} from 'react-icons/bs'
import { useSelector } from "react-redux";
import { IStore } from "../../store";
import {AiOutlineSearch} from "react-icons/ai"

export const Filters = () => {
  const [input, setInput] = useState<string>("")

  const dispatch = useDispatch()
  
  const {listStyle} = useSelector((state: IStore) => state.filters)
  return (
    <FiltersStyle>
      <div className="selectsFilter">
        <select onChange={(e) => dispatch({type: "orderBy", orderBy: e.target.value})} name="orderBy" id="orderBy">
          <option selected hidden value="">
            Ordenação
          </option>
          <option value="name">Nome A-Z</option>
          <option value="-name">Nome Z-A</option>
          <option value="price">Preço Menor - Maior</option>
          <option value="-price">Preço Maior - Menor</option>
          <option value="quantityStock">Estoque Menor - Maior</option>
          <option value="-quantityStock">Estoque Maior - Menor</option>
        </select>
        <select onChange={(e) => dispatch({type: "limit", limit: e.target.value})} name="limit" id="limit">
          <option value="" selected hidden>
            Itens por página
          </option>
          <option value="4">4 itens por página</option>
          <option value="10">10 itens por página</option>
          <option value="20">20 itens por página</option>
          <option value="30">30 itens por página</option>
        </select>
        <div className="buttonDiv">
        <button onClick={() => dispatch({type: "listStyle", listStyle: "box"})} className={listStyle === 'box' ? 'active' : ''}><BsFillGrid3X3GapFill/></button>
        
        <button onClick={() => dispatch({type: "listStyle", listStyle: "list"})} className={listStyle === 'list' ? 'active' : ''}><BsListCheck/></button>
        </div>
      </div>
          <form onSubmit={(e) => {
              e.preventDefault()
              dispatch({type: "inputSearch", inputSearch: input})
      }} action="">
        <input
          type="text"
          name="searchItem"
          id="searchItem"
                  placeholder="Procure por um item"
                  onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit"><AiOutlineSearch/></button>
      </form>
    </FiltersStyle>
  );
};
