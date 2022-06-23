import React, { useState } from 'react';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { FiShoppingBag } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import styles from './ProductsEdit.module.css';
import { CAT_GET, PROD_EDIT, PROD_GET_ID } from '../../api';

const ProductsEdit = () => {
  const [currentStep, setCurrentStep] = useState(0),
    steps = [
      { id: 'FIELDS', title: 'Etapa 1 de 2' },
      { id: 'FILES', title: 'Etapa 2 de 2' },
    ],
    [categories, setCategories] = useState(null),
    productId = window.location.pathname.slice(-36),
    [formValues, setFormValues] = useState({}),
    [formValuesUpdated, setFormValuesUpdated] = useState({}),
    home = window.location.origin;

  React.useEffect(() => {
    CAT_GET(setCategories);
    PROD_GET_ID(productId, setFormValues);
  }, [productId]);

  function handleNextStep() {
    setCurrentStep((prevState) => prevState + 1);
  }

  function handlePrevStep() {
    setCurrentStep((prevState) => prevState - 1);
  }

  function handleChange(event) {
    let { name, value, checked, type } = event.target;

    if (type === 'checkbox') value = checked;
    if (value === 'true') value = true;
    if (value === 'false') value = false;

    setFormValuesUpdated((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setFormValuesUpdated((prevState) => ({
        ...prevState,
        image: img,
      }));
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(formValuesUpdated).forEach((key) => {
      formData.append(key, formValuesUpdated[key]);
    });
    PROD_EDIT(productId, formData);
    setTimeout(function () {
      window.location.href = home;
    }, 2000);
  }

  return (
    <form className="animeLeft">
      {steps[currentStep].id === 'FIELDS' && (
        <section className={`${styles.wrapper} animeLeft`}>
          <a href="/">
            <IoIosArrowBack className={styles.arrow} />
          </a>

          <div className={styles.headNewProduct}>
            <h1>
              {' '}
              <FiShoppingBag /> Editar produto ({formValues.name})
            </h1>
            <p>Etapa 1 de 2</p>
          </div>
          <div className={styles.form}>
            {' '}
            <Input
              placeholder="Nome do Produto"
              type="text"
              name="name"
              onChange={handleChange}
              value={formValuesUpdated.name}
            />
            <Input
              placeholder="Descrição"
              type="text"
              name="description"
              onChange={handleChange}
              value={formValuesUpdated.description}
            />
            <Input
              placeholder="Descrição em Inglês"
              type="text"
              name="englishDescription"
              onChange={handleChange}
              value={formValuesUpdated.englishDescription}
            />
            <Input
              placeholder="Valor (R$)"
              type="number"
              name="price"
              onChange={handleChange}
              value={formValuesUpdated.price}
            />
            <select name="categoryId" id="" onChange={handleChange}>
              <option value="" disabled selected>
                Categorias
              </option>
              {categories &&
                categories.map((category) => (
                  <option
                    key={category.id}
                    name="categoryId"
                    value={category.id}
                  >
                    {category.name}
                  </option>
                ))}
            </select>
            <div className={styles.LGV}>
              <Input
                label="Livre de Lactose"
                type="checkbox"
                name="lacFree"
                onChange={handleChange}
                value={formValuesUpdated.lacFree}
              />
              <Input
                label="Livre de Gluten"
                type="checkbox"
                name="glutenFree"
                onChange={handleChange}
                value={formValuesUpdated.glutenFree}
              />
              <Input
                label="Vegetariano"
                type="checkbox"
                name="veg"
                onChange={handleChange}
                value={formValuesUpdated.veg}
              />
            </div>
            <div className={styles.radio} id="personCount">
              <h2>Para quantas pessoas?</h2>
              <Input
                name="personCount"
                type="radio"
                id="onePerson"
                value="1"
                onChange={handleChange}
                label="Serve uma pessoa"
              />
              <Input
                name="personCount"
                type="radio"
                id="twoPerson"
                value="2"
                onChange={handleChange}
                label="Serve duas pessoas"
              />
              <Input
                name="personCount"
                type="radio"
                id="family"
                value="4"
                onChange={handleChange}
                label="Família - até 4 pessoas"
              />
            </div>
            <div className={styles.radio} id="disponibility">
              <h2>Disponibilidade para o público</h2>
              <Input
                name="disponibility"
                type="radio"
                id="productAvailable"
                value={true}
                onChange={handleChange}
                label="Produto Disponível"
              />

              <Input
                name="disponibility"
                type="radio"
                id="productUnavailable"
                value={false}
                onChange={handleChange}
                label="Produto Indisponível"
              />
            </div>
            <div className={styles.btn}>
              <Button onClick={handleNextStep}>Próximo</Button>
            </div>
          </div>
        </section>
      )}
      {steps[currentStep].id === 'FILES' && (
        <section className={`${styles.wrapper} animeLeft`}>
          <IoIosArrowBack onClick={handlePrevStep} className={styles.arrow} />
          <div className={styles.headNewProduct}>
            <h1>
              {' '}
              <FiShoppingBag /> Editar produto ({formValues.name})
            </h1>
            <p>Etapa 2 de 2</p>
          </div>
          <div className={styles.form2}>
            <h2>Selecione a foto do produto</h2>
            <input
              type="file"
              className={styles.bigFile}
              onChange={handleImageChange}
            />
            <input type="file" className={styles.smallFile} />
            <input type="file" className={styles.smallFile} />
            <div className={styles.btn2}>
              <Button onClick={handleSubmit}>Salvar alterações</Button>
            </div>
          </div>
        </section>
      )}
    </form>
  );
};

export default ProductsEdit;
