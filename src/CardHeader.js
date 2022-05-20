const CardHeader = (props) => {
    return (
        <div class={ `card_header ${props.color}` }>
            <div class="tittle">
                <div class="circle">1</div>
                <p>Agenda/Topic</p>
            </div>
            <div class="id">
                <p>SAAS-000</p>
                <img src="img/icon.svg" alt="" />
            </div>
        </div>
    );
};

export default CardHeader;
