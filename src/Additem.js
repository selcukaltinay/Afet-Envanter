import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormText, Collapse, Button, CardBody, Card } from 'reactstrap';

class Additem extends Component {
  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, status: 'Closed' };
  }

  onEntering() {
    this.setState({ status: 'Opening...' });
  }

  onEntered() {
    this.setState({ status: 'Opened' });
  }

  onExiting() {
    this.setState({ status: 'Closing...' });
  }

  onExited() {
    this.setState({ status: 'Closed' });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="donateItem">
        <h5>Katkıda Bulun !</h5>
        <Button color="primary" onClick={this.toggle}  style={{marginBottom: '1rem' }}>Öğe Ekle</Button>
        <Collapse
          isOpen={this.state.collapse}
          onEntering={this.onEntering}
          onEntered={this.onEntered}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <Card>
            <CardBody>
                <Form>
                    
                    <FormGroup>
                    <Label for="exampleSelect">
                    Kategori
                    </Label>
                    <Input id="exampleSelect" name="select" type="select">
                    <option>Hırdavat</option>
                    <option>İş Makinesi</option>
                    <option>Temizlik Malzemesi</option>
                    <option>Gıda</option>
                    </Input>
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleText">Ad Soyad</Label>
                    <Input name="name"/>
                    </FormGroup>    
                    <FormGroup>
                    <Label for="exampleText">Telefon</Label>
                    <Input name="name"/>
                    </FormGroup>  
                    <FormGroup>
                    <Label for="exampleText">Ürün Adı</Label>
                    <Input name="name"/>
                    </FormGroup>       
                    <FormGroup>
                    <Label for="exampleText">Teknik Bilgi</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleText">Açık Adres</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleFile">Dosya</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                        Gerekli olduğunu düşündüğünüz durumlarda, ürün görseli veya teknik döküman yükleyebilirsiniz.
                    </FormText>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Yukarıda vermiş olduğum bilgilerin doğruluğunu teyyit ediyorum.
                    </Label>
                    </FormGroup>
                    <Button>Gönder</Button>
                </Form>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Additem;